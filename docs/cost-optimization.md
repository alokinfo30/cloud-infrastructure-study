# Cloud Cost Optimization Plan

## Current Usage (AWS Free Tier + Paid)
| Service | Monthly Cost | Optimization Opportunity |
|---------|--------------|--------------------------|
| EC2 | $0 (free tier) | Switch to Spot Instances for non-prod |
| RDS | $0 (free tier) | Right-size instances |
| S3 | $2 | Use lifecycle policies |
| Data Transfer | $5 | Use CloudFront CDN |

## Optimization Actions
1. **Right-sizing**: Use AWS Compute Optimizer to find ideal instance types
2. **Scheduled shutdown**: Stop dev/test instances at night
3. **Reserved Instances**: Purchase for steady-state workloads
4. **Savings Plans**: Commit to usage for discounts