using System;
using System.Collections.Generic;

namespace MedicalShop.Models
{
    public partial class Medicine
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool? IsActive { get; set; }
        public DateTime? DateTime { get; set; }
    }
}
