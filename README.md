Your public key has been saved in /Users/tinabajwa/.ssh/sre_project_key2.pub
ssh -i /Users/tinabajwa/.ssh/sre_project_key2 ec2-user@44.220.162.241



1. install all the packages (ansible, docker, terraform, amz configure, brew install awscli )
2. generate an SSH key for EC2 access 
    - ssh-keygen -t rsa -b 4096 -C "tinamarie.bajwa@gmail.com
    - mkdir -p ~/.ssh (created ssh directory; saved key to file: /Users/tinabajwa/.ssh/NAME KEY_FILE)
3. Write Terraform files.
    - terraform will provision AWS infrastructure
        - 1 EC2 Instance
        -  security group allowing SSH and HTTP access
        - terraform init, terraform apply
            -output instance public ip = 44.220.162.241
4. Write Ansible Playbook
    - add EC2 instance public IP in inventory44.220.162.241 ansible_user=ec2-user          ansible_ssh_private_key_file=~/.ssh/KEY_FILE_NAME
    - wrote playbook to install Docker
        - issue: need to install python with pip. install ansible on EC2 instance
    - run ansible (playbook installs Docker on EC2 instance)
        - command: ansible-playbook -i inventory.ini playbook.yml
5. Docker is installed on EC2 instance from playbook(Ansible)
6. Write Dockerfile & index.js -> Run a Node.js environment 
    - using Docker to run containers, manage images, and even deploy applications
    - A Dockerfile helps define how your application container should be built. For example, it specifies which base image to use, what dependencies to install, what files to copy, and what command to run when the container starts. Consistency: With a Dockerfile, you ensure that everyone running the container gets the same environment, with the exact same dependencies installed.Customization: You can specify exactly how the container should behave (e.g., which version of Node.js, which dependencies, etc.).Automation: If you use a Dockerfile, you can easily automate the build and deployment process.
    - Your local machine is primarily for development (editing the code), but when you're ready to deploy, you push your code to the EC2 instance and run Docker there.

7. Build the Docker image
    - command: docker build -t my-node-app .







We went through setting up the AWS infrastructure using Terraform, making sure all the configuration is correct.
Then we moved to SSH and Ansible to manage your instance and install necessary tools (like Docker).
I avoided making any mistakes this time, and the instructions should be simple and error-free.
Next Steps:
Once Docker is installed, you can move on to Dockerizing your application and using Terraform to configure the necessary infrastructure for the application.



Goal:
You’re trying to automate configuration on an EC2 instance in AWS using Ansible. The steps involve updating system packages, installing Docker, and possibly other software packages. You're facing issues related to package management and the playbook execution.

Here's what we need to do:
Install Docker on the EC2 instance – You want to install Docker and make sure it's running.
Update System Packages – You want to ensure that the system packages are updated to the latest versions.
Install Any Additional Packages – If you need to install any additional software (like git, vim, nginx, etc.), we'll use the correct package name in the playbook.


the main purpose of using Ansible in the previous steps was essentially automating and simplifying the configuration process for installing Docker and any related tasks across multiple machines, instead of handling them manually one by one.
- Automate Docker Installation
- Ensure Consistency on installing on all instances
- services (we apps, databases) configured consistently 
playbook didnt work: 
What could have been achieved:
If the playbook worked as expected, Ansible would have automatically installed Docker across multiple EC2 instances without needing you to log in manually and run the installation commands.
It would also automate any follow-up tasks (e.g., starting and enabling Docker, managing configurations) and future changes (e.g., updating Docker or adding more software).
- Install express
    - commands: npm init -y, npm install express