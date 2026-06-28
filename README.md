# cloud-infrastructure-study


Implementation of Cloud-Based Infrastructure in Business Operations: A Professional Study

documenting a business can move from traditional IT to cloud-based infrastructure—covering the people, process, and technology dimensions.

Key insight: "Cloud migration isn't just about technology—it's about transforming how people work and how processes flow" 

This project will demonstrate a complete cloud migration lifecycle using a sample business application (like a simple CRM or inventory system) as  case study.

Setup Your Free Development Environment

Step 1.1: Create Required Free Accounts

Tool	Purpose	Free Tier Details

GitHub	Version control & CI/CD	Unlimited public repos, 2,000 min/month private CI	
AWS Free Tier	Cloud infrastructure	12 months free (EC2, RDS, S3)	
Terraform Cloud	Infrastructure as Code state management	Free for small teams	
Grafana Cloud	Monitoring & observability	Generous free tier	
UptimeRobot	External uptime monitoring	50 monitors free	


 Install Local Development Tools


 # Version control
git --version  # Install from git-scm.com if not present

# Containerization (Docker Desktop or Podman)
docker --version  # or: podman --version

# Infrastructure as Code
terraform --version  # Download from terraform.io

# Kubernetes CLI
kubectl version --client  # Install via your package manager

# Lightweight Kubernetes for local testing
k3d version  # Install from k3d.io

# Security scanning
trivy --version  # Install from aquasecurity.github.io

# Node.js (for sample app)
node --version  # Install from nodejs.org


Assess Current State and Build the Business Case


Conduct Infrastructure Discovery
The goal is to inventory what currently exists on-premises



Classify Applications Using the "7 Rs" Framework
Evaluate each application for the best migration strategy :

Strategy	When to Use
Rehost (Lift & Shift)	Quick migration, no changes needed—fastest approach
Replatform	Minor tweaks to leverage cloud services (e.g., managed databases)
Repurchase	Replace with SaaS alternative
Refactor (Re-architect)	Full redesign for cloud-native benefits—most effort, biggest payoff
Relocate	Move VMware/on-prem infrastructure to cloud version
Retain	Keep on-prem for security/compliance reasons
Retire	Decommission applications no longer needed


Build the Business Case with Cost Projections
Use AWS Migration Evaluator (free) to generate cost projections


Design the Target Cloud Architecture
Step 3.1: Choose Your Cloud Provider
Select AWS for this study—it has the most mature free tier and extensive documentation. Key considerations :

✅ Scalability (pay-as-you-grow)

✅ Security compliance (HIPAA, GDPR ready)

✅ Global reach and disaster recovery

✅ Innovation acceleration (AI/ML, serverless available)


Design the Cloud Operating Model
Define how people, processes, and technology will work together in the cloud

Infrastructure Management :

How infrastructure is provisioned → via Terraform (Infrastructure as Code)

Who can provision → Approved DevOps team members

Patching and updates → Automated via CI/CD pipelines

Application Management :

Deployment mechanism → CI/CD pipeline (GitHub Actions)

Scaling policies → Auto-scaling based on CPU/memory

Backup procedures → Automated snapshots daily

People Model :

text
Roles needed:
├── Cloud Architect - Design and governance
├── DevOps Engineer - CI/CD and automation
├── Security Engineer - Compliance and IAM
└── Application Teams - Own their app deployments


Financial Model :

Move from CAPEX (buying servers) to OPEX (pay-as-you-go)

Tag all resources for cost tracking: Environment:Dev/Test/Prod


Create the Architecture Diagram
Use Draw.io (free) to create your architecture diagram


Build the Development Environment

Create a Sample Application
Create a simple Node.js CRUD application to demonstrate the migration.

Test Locally with Docker
bash
# Build the container
docker build -t cloud-study-app app/

# Run locally
docker run -p 3000:3000 cloud-study-app

# Test the endpoint
curl http://localhost:3000/health
# Expected: {"status":"OK"}

Establish CI/CD with GitHub Actions (Free)
Create the CD Pipeline (Deployment)
Infrastructure as Code with Terraform (Free)
Define Network Infrastructure
Define Compute Resources
Deploy with Terraform


Deployment Order (critical for success) :

Network & Security (VPC, subnets, security groups)

Storage (S3 buckets, RDS database)

Application (EC2 instances, Lambda functions)

Frontend (Load balancer, CloudFront)


 Security Implementation

 Implement the Shared Responsibility Model 

 Set Up IAM with Least Privilege
 Enable Encryption
 Monitoring and Observability
 Set Up CloudWatch Monitoring


 Set Up Grafana Cloud (Free) 
Sign up at grafana.com for free tier

Install the Grafana Agent on your EC2 instances

Connect AWS CloudWatch as a data source

Create dashboards for:

Application performance (latency, error rates)

Infrastructure health (CPU, memory, disk)

Business metrics (users, transactions)


Set Up Uptime Monitoring 
Sign up at uptimerobot.com (free for 50 monitors)

Add monitors for:

https://your-app-url/health (check every 5 minutes)

Main application endpoints

Configure alert channels (email, Slack)



Report Generation System (PDF and PPT)
Step 9.1: Install Carbone Report Generator 
Carbone is a free, open-source report generator that creates PDF and PPTX from templates.
 Run Report Generation
 # Generate your reports
node report-generator.js

# Output:
# ✅ PDF generated: report.pdf
# ✅ PPTX generated: presentation.pptx


Production Deployment

Define Production Environment
Production Deployment Checklist
Execute Production Deployment

Post-Migration Validation 
Test	Expected Result	Status
Application health check	HTTP 200	✅
Database connectivity	CRUD operations work	✅
Performance baseline	< 500ms response time	✅
Backup restore test	Restore completes in < 10 min	✅
Security scan	No critical vulnerabilities	✅
Monitoring dashboards	All metrics visible	✅

Documentation and Knowledge Transfer

Create Runbooks

Database Backups
bash
# Automated via RDS snapshots (daily)
# Manual backup:
aws rds create-db-snapshot --db-instance-identifier my-db --db-snapshot-identifier manual-backup-$(date +%Y-%m-%d)

Disaster Recovery
Failover to secondary region

Restore database from last snapshot

Point DNS to failover instance

Estimated RPO: 5 minutes, RTO: 30 minutes
Estimated RPO: 5 minutes, RTO: 30 minutes

Incident Response
Check monitoring dashboards (Grafana/UptimeRobot)

Check logs (CloudWatch Logs Insights)

If issue identified, rollback deployment:

bash
# Rollback ECS service to previous task definition
aws ecs update-service --cluster prod --service app --task-definition previous-version
Notify stakeholders via status page

text

### Step 11.2: Create Training Materials

**`docs/training.md`**:

```markdown
# Cloud Operations Training

## For IT Team
- Managing AWS Console and CLI
- Terraform updates and changes
- Monitoring and alert response
- Security incident handling

## For Application Teams
- CI/CD pipeline usage (GitHub Actions)
- Container build and deployment
- Application logging and monitoring setup
- Self-service resource provisioning via Terraform modules

## For End Users
- New cloud portal access and login
- Single Sign-On (SSO) configuration
- Reporting and analytics features
- Support process for cloud issues

Optimization and Continuous Improvement
Cost Optimization

Performance Optimization
Key performance metrics to track :

Application response time (target: < 200ms)

Error rate (target: < 0.1%)

API throughput (requests/second)

Database query performance

Final Deliverables
Final Checklist
Deliverable	Location	Status
Infrastructure inventory	docs/inventory.md	✅
Business case with cost projections	docs/business-case.md	✅
Cloud architecture diagram	docs/architecture.drawio	✅
Cloud operating model	docs/cloud-operating-model.md	✅
Terraform IaC code	terraform/	✅
CI/CD pipelines	.github/workflows/	✅
Security implementation	terraform/iam.tf	✅



AWS Account Registration (Complete Guide)
🟢 SOLUTION: Create AWS Free Tier Account
Baby Step 1: Go to AWS Website

Open Chrome/Edge browser

Go to: https://aws.amazon.com/free

Baby Step 2: Click "Create a Free Account"

Click the orange "Create a Free Account" button

OR go directly to: https://portal.aws.amazon.com/billing/signup

Baby Step 3: Enter Your Email

Enter your email address

Enter your AWS account name (e.g., "Cloud-Study-Project")

Click "Verify email address"

Baby Step 4: Verify Your Email

Check your email inbox

Find the AWS verification email

Enter the verification code

Click "Verify"

Baby Step 5: Create Your Password

Enter a strong password (at least 8 characters)

Enter it again to confirm

Click "Continue"

Baby Step 6: Enter Your Contact Information

Select "Personal" account type

Enter your full name

Enter your phone number

Enter your address (required)

Click "Continue"

Baby Step 7: Add Payment Method

IMPORTANT: AWS requires a credit/debit card for verification, but you WILL NOT be charged during the free tier period.

Enter your credit/debit card details

Enter your billing address

Click "Verify and Add"

Baby Step 8: Identity Verification

You'll receive a phone call or SMS

Enter the 4-digit PIN when prompted

Follow the automated voice instructions

Baby Step 9: Choose Support Plan

Select "Basic Support - Free"

Click "Complete Sign Up"

Baby Step 10: Wait for Account Activation

AWS takes 1-5 minutes to activate your account

You'll receive an email: "Your AWS Account is Ready!"

Baby Step 11: Log Into AWS Console

Go to: https://console.aws.amazon.com/

Enter your email (root user)

Enter your password

Click "Sign in"

Baby Step 12: Create IAM User (Security Best Practice)

In AWS Console, search for "IAM" in the top search bar

Click "IAM" from the results

In the left menu, click "Users"

Click "Add users"

Username: terraform-user

Access type: Select "Programmatic access" only

Click "Next: Permissions"

Click "Attach existing policies directly"

Search for and select:

AdministratorAccess (for now, for learning)

OR select more specific policies

Click "Next: Tags" → "Next: Review"

Click "Create user"

Baby Step 13: Save Your Access Keys

⚠️ CRITICAL: Copy these keys NOW! You won't see them again!

Click "Download .csv" - SAVE THIS FILE!

Also copy:

Access Key ID (starts with AKIA...)

Secret Access Key (starts with ...)

Store these securely

📋 PHASE 5: Set Up AWS CLI and Credentials
🟢 SOLUTION: Configure AWS CLI on Windows
Baby Step 1: Install AWS CLI

powershell
# Download AWS CLI installer
# Go to: https://aws.amazon.com/cli/
# Download the Windows installer (MSI)
# Run the installer
OR using PowerShell:

powershell
# Install using winget (Windows 11)
winget install --id Amazon.AWSCLI

# Verify installation
aws --version