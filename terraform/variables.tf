# variables.tf
variable "aws_region" {
  description = "AWS region"
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name"
  default     = "dev"
}

variable "prefix" {
  description = "Resource name prefix"
  default     = "cloud-study"
}

variable "instance_type" {
  description = "EC2 instance type"
  default     = "t2.micro"
}

variable "min_size" {
  description = "Minimum instances"
  default     = 1
}

variable "max_size" {
  description = "Maximum instances"
  default     = 2
}

# variables.tf
variable "aws_region" {
  description = "AWS region"
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name"
  default     = "dev"
}

variable "prefix" {
  description = "Resource name prefix"
  default     = "cloud-study"
}