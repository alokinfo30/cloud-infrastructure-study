const fs = require('fs');
const carbone = require('carbone');

// Prepare the data for the report
const data = {
  summary: 'Successfully migrated business infrastructure to AWS cloud with zero-downtime using a staged migration approach.',
  metrics: {
    applications_migrated: 5,
    cost_savings: '$45,000/year',
    downtime_hours: 0.5
  },
  architecture: {
    vpc: '10.0.0.0/16 with 2 public/2 private subnets',
    ec2: '2 x t2.micro instances in Auto Scaling group',
    rds: 'db.t2.micro PostgreSQL (free tier)',
    s3: 'Encrypted bucket for static assets'
  },
  security: {
    iam_roles: 'EC2 role with least privilege access',
    encryption: 'AES-256 encryption for all data at rest',
    compliance: 'GDPR and HIPAA ready'
  }
};

// PDF Generation with Carbone [citation:9]
function generatePDF() {
  const options = { convertTo: 'pdf' };
  
  carbone.render('./templates/report.odt', data, options, (err, result) => {
    if (err) return console.error('PDF generation failed:', err);
    fs.writeFileSync('report.pdf', result);
    console.log('✅ PDF generated: report.pdf');
    process.exit(); // Kill LibreOffice workers
  });
}

// PPTX Generation (direct from template)
function generatePPTX() {
  // Use a .pptx template with same markers
  carbone.render('./templates/presentation.pptx', data, (err, result) => {
    if (err) return console.error('PPTX generation failed:', err);
    fs.writeFileSync('presentation.pptx', result);
    console.log('✅ PPTX generated: presentation.pptx');
  });
}

// Run both
generatePDF();
setTimeout(generatePPTX, 2000);