# test-instance.tf
resource "aws_instance" "test" {
  ami           = "ami-0c55b159cbfafe1f0"  # Amazon Linux 2 (us-east-1)
  instance_type = "t2.micro"
  count         = 1

  tags = {
    Name        = "${var.prefix}-test-instance"
    Environment = var.environment
  }
}