# Production Deployment Checklist

## Pre-Deployment
- [ ] All tests passing (CI pipeline green)
- [ ] Security scan passed (Trivy scan with 0 critical vulnerabilities)
- [ ] Backup strategy documented and tested
- [ ] Rollback procedure documented
- [ ] Performance baseline established
- [ ] Monitoring alerts configured

## Deployment Execution
- [ ] Notify stakeholders of deployment window
- [ ] Perform migration cutover [citation:3]
- [ ] Run smoke tests (health check, business critical flows)
- [ ] Monitor error rates and system metrics

## Post-Deployment
- [ ] Validate all services are operational
- [ ] Verify backup/restore works in cloud environment
- [ ] Update runbooks and documentation
- [ ] Gather feedback from users and IT staff [citation:1][citation:4]
- [ ] Schedule optimization review (30/60/90 days)