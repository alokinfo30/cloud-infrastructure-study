# Cloud Infrastructure Runbook

## Common Operations

### Scaling Applications
```bash
# Manual scale (if not using Auto Scaling)
aws ec2 modify-instance-attribute --instance-id i-xxx --instance-type t3.large