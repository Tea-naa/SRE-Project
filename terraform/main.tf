# Configure the AWS provider
provider "aws" {
  region = "us-east-1"  # Replace with your AWS region
}

# Create a new key pair for the EC2 instance
resource "aws_key_pair" "sre_key" {
  key_name   = "sre_project_key2"
  public_key = file("/Users/tinabajwa/.ssh/sre_project_key2.pub")  # Replace with your public key path
}

# Create a security group that allows both SSH and HTTP traffic
resource "aws_security_group" "web_sg" {
  name_prefix = "web-sg"
  
  # Inbound SSH access (port 22)
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Allow SSH from any IP
  }

  # Inbound HTTP access (port 80)
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Allow HTTP from any IP
  }

  # Outbound traffic (allow all traffic)
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Create the EC2 instance
resource "aws_instance" "web_server" {
  ami           = "ami-0c02fb55956c7d316"  # Amazon Linux 2 AMI ID
  instance_type = "t2.micro"
  
  key_name      = aws_key_pair.sre_key.key_name  # Dynamically reference the key pair
  security_groups = [aws_security_group.web_sg.name]  # Attach the security group

  tags = {
    Name = "SRE-Web-Server"
  }

}

