# Cloud Security: Shared Responsibility Model

## AWS Responsibility (Securing the Cloud)
- Physical security of data centers
- Host OS and virtualization layer security
- Network infrastructure security
- Compliance certifications (ISO, SOC, HIPAA)

## Customer Responsibility (Security IN the Cloud)
- IAM (Identity and Access Management) - who can access what
- Data encryption (at rest and in transit)
- Security group and firewall configuration
- Application security and code vulnerabilities
- Backup and disaster recovery

## Our Implementation
- **IAM**: Principle of least privilege
- **Encryption**: All S3 buckets encrypted
- **Secrets**: AWS Secrets Manager for credentials
- **Monitoring**: GuardDuty for threat detection