using System;
using System.Collections.Generic;
using System.Text;

namespace Virtuous1
{
    public class Donation
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public double Amount { get; set; }
        public string Cc { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
