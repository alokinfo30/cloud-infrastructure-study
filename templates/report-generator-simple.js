const fs = require('fs');
const path = require('path');

// Create reports directory if it doesn't exist
if (!fs.existsSync('reports')) {
    fs.mkdirSync('reports');
}

// Sample data for the study
const reportData = {
    title: "Cloud Infrastructure Implementation Report",
    date: new Date().toISOString().split('T')[0],
    author: "Information Technology Engineer",
    summary: "Successfully completed cloud migration study from on-premises to AWS cloud infrastructure.",
    metrics: {
        applications: 5,
        costSavings: "$45,000/year",
        downtime: "0.5 hours",
        migrationTime: "2 weeks"
    },
    architecture: {
        vpc: "10.0.0.0/16 with public/private subnets",
        compute: "2 x t2.micro EC2 instances",
        database: "RDS PostgreSQL on t2.micro",
        storage: "S3 with encryption"
    },
    security: {
        iam: "Least privilege access",
        encryption: "AES-256 for all data",
        compliance: "GDPR & HIPAA ready"
    },
    phases: [
        "Assessment & Discovery",
        "Architecture Design",
        "Development Setup",
        "Infrastructure as Code",
        "Security Implementation",
        "Monitoring & Observability",
        "Migration Execution",
        "Post-Migration Validation"
    ],
    challenges: [
        "Docker configuration on Windows",
        "Terraform backend authentication",
        "AWS credentials setup"
    ],
    nextSteps: [
        "Optimize costs using Spot Instances",
        "Implement auto-scaling",
        "Add disaster recovery"
    ]
};

// Generate HTML Report
function generateHTMLReport() {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>${reportData.title}</title>
        <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; margin: 40px; max-width: 1000px; margin: 40px auto; padding: 20px; }
            h1 { color: #232f3e; border-bottom: 3px solid #ff9900; padding-bottom: 10px; }
            h2 { color: #232f3e; margin-top: 30px; border-left: 4px solid #ff9900; padding-left: 10px; }
            .metric { background: #f8f8f8; padding: 20px; margin: 10px 0; border-left: 4px solid #ff9900; border-radius: 4px; }
            .table { width: 100%; border-collapse: collapse; margin: 15px 0; }
            .table th { background: #232f3e; color: white; padding: 12px; text-align: left; }
            .table td { padding: 10px; border-bottom: 1px solid #ddd; }
            .badge { background: #ff9900; color: white; padding: 3px 10px; border-radius: 12px; font-size: 12px; }
            .phase-list { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
            .phase-item { background: #f0f7ff; padding: 8px 15px; border-radius: 20px; }
            ul { line-height: 1.8; }
            .footer { margin-top: 50px; border-top: 1px solid #ddd; padding-top: 20px; color: #666; font-size: 12px; text-align: center; }
        </style>
    </head>
    <body>
        <h1>☁️ ${reportData.title}</h1>
        <p><strong>Date:</strong> ${reportData.date} | <strong>Author:</strong> ${reportData.author}</p>
        
        <h2>Executive Summary</h2>
        <div class="metric">
            <p style="font-size: 16px;">${reportData.summary}</p>
        </div>
        
        <h2>📊 Key Metrics</h2>
        <div class="metric">
            <strong>Applications Migrated:</strong> ${reportData.metrics.applications}<br>
            <strong>Cost Savings:</strong> ${reportData.metrics.costSavings}<br>
            <strong>Downtime:</strong> ${reportData.metrics.downtime}<br>
            <strong>Migration Time:</strong> ${reportData.metrics.migrationTime}
        </div>
        
        <h2>🏗️ Architecture Components</h2>
        <table class="table">
            <tr><th>Component</th><th>Configuration</th></tr>
            <tr><td>Network (VPC)</td><td>${reportData.architecture.vpc}</td></tr>
            <tr><td>Compute (EC2)</td><td>${reportData.architecture.compute}</td></tr>
            <tr><td>Database (RDS)</td><td>${reportData.architecture.database}</td></tr>
            <tr><td>Storage (S3)</td><td>${reportData.architecture.storage}</td></tr>
        </table>
        
        <h2>🔒 Security Implementation</h2>
        <ul>
            <li><strong>IAM:</strong> ${reportData.security.iam}</li>
            <li><strong>Encryption:</strong> ${reportData.security.encryption}</li>
            <li><strong>Compliance:</strong> ${reportData.security.compliance}</li>
        </ul>
        
        <h2>📋 Project Phases</h2>
        <div class="phase-list">
            ${reportData.phases.map(phase => `<div class="phase-item">✓ ${phase}</div>`).join('')}
        </div>
        
        <h2>⚠️ Challenges Overcome</h2>
        <ul>
            ${reportData.challenges.map(c => `<li>${c}</li>`).join('')}
        </ul>
        
        <h2>🚀 Next Steps</h2>
        <ul>
            ${reportData.nextSteps.map(s => `<li>${s}</li>`).join('')}
        </ul>
        
        <div class="footer">
            <p>Generated on ${new Date().toLocaleString()}</p>
            <p>Cloud Infrastructure Study - Information Technology Engineer</p>
        </div>
    </body>
    </html>
    `;
    
    fs.writeFileSync('reports/report.html', html);
    console.log('✅ HTML Report generated: reports/report.html');
    console.log('📌 Open in browser and print to PDF (Ctrl+P → Save as PDF)');
}

// Generate Presentation as CSV
function generatePresentationCSV() {
    const csv = `Topic,Details
Project,${reportData.title}
Date,${reportData.date}
Author,${reportData.author}
Summary,${reportData.summary}

Key Metrics,
Applications Migrated,${reportData.metrics.applications}
Cost Savings,${reportData.metrics.costSavings}
Downtime,${reportData.metrics.downtime}
Migration Time,${reportData.metrics.migrationTime}

Architecture,
VPC,${reportData.architecture.vpc}
Compute,${reportData.architecture.compute}
Database,${reportData.architecture.database}
Storage,${reportData.architecture.storage}

Security,
IAM,${reportData.security.iam}
Encryption,${reportData.security.encryption}
Compliance,${reportData.security.compliance}

Phases,${reportData.phases.join('; ')}
Challenges,${reportData.challenges.join('; ')}
Next Steps,${reportData.nextSteps.join('; ')}`;
    
    fs.writeFileSync('reports/presentation.csv', csv);
    console.log('✅ Presentation data generated: reports/presentation.csv');
    console.log('📌 Import into PowerPoint: Data → From Text/CSV');
}

// Generate Markdown Report (for GitHub)
function generateMarkdownReport() {
    const markdown = `# ${reportData.title}

**Date:** ${reportData.date} | **Author:** ${reportData.author}

## Executive Summary
${reportData.summary}

## Key Metrics
- **Applications Migrated:** ${reportData.metrics.applications}
- **Cost Savings:** ${reportData.metrics.costSavings}
- **Downtime:** ${reportData.metrics.downtime}
- **Migration Time:** ${reportData.metrics.migrationTime}

## Architecture Components
| Component | Configuration |
|-----------|---------------|
| Network | ${reportData.architecture.vpc} |
| Compute | ${reportData.architecture.compute} |
| Database | ${reportData.architecture.database} |
| Storage | ${reportData.architecture.storage} |

## Security Implementation
- **IAM:** ${reportData.security.iam}
- **Encryption:** ${reportData.security.encryption}
- **Compliance:** ${reportData.security.compliance}

## Project Phases
${reportData.phases.map(p => `- ${p}`).join('\n')}

## Challenges Overcome
${reportData.challenges.map(c => `- ${c}`).join('\n')}

## Next Steps
${reportData.nextSteps.map(s => `- ${s}`).join('\n')}

---
*Generated on ${new Date().toLocaleString()}*
`;
    
    fs.writeFileSync('reports/report.md', markdown);
    console.log('✅ Markdown Report generated: reports/report.md');
}

// Run all generators
console.log('📝 Generating reports...\n');
generateHTMLReport();
generatePresentationCSV();
generateMarkdownReport();

console.log('\n✅ All reports generated in the /reports folder!');
console.log('\n📄 To get PDF: Open reports/report.html in browser → Print → Save as PDF');
console.log('📊 To get PPT: Open reports/presentation.csv in Excel → Copy to PowerPoint');