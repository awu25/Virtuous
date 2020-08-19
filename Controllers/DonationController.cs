using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Virtuous1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DonationController : ControllerBase
    {
        // POST api/<DonationController>
        [HttpPost]
        public IActionResult  Post([FromBody] Donation donation)
        {
            try
            {
                using(var context = new ContextVirtuous())
                {
                    donation.CreateDate = DateTime.Now;
                    context.Donations.Add(donation);
                    context.SaveChanges();
                }
                return Ok(donation);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error");
            }

        }

    }
}
