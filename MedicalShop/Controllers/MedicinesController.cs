﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MedicalShop.Models;

namespace MedicalShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicinesController : ControllerBase
    {
        private readonly medicalShopContext _context;

        public MedicinesController(medicalShopContext context)
        {
            _context = context;
        }

        // GET: api/Medicines
        [HttpGet]
        public IEnumerable<Medicine> GetMedicine()
        {
            return _context.Medicine;
        }

        // GET: api/Medicines/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMedicine([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var medicine = await _context.Medicine.FindAsync(id);

            if (medicine == null)
            {
                return NotFound();
            }

            return Ok(medicine);
        }

        // PUT: api/Medicines/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMedicine([FromRoute] int id, [FromBody] Medicine medicine)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != medicine.Id)
            {
                return BadRequest();
            }

            _context.Entry(medicine).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MedicineExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Medicines
        [HttpPost]
        public async Task<IActionResult> PostMedicine([FromBody] Medicine medicine)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Medicine.Add(medicine);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMedicine", new { id = medicine.Id }, medicine);
        }

        // DELETE: api/Medicines/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedicine([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var medicine = await _context.Medicine.FindAsync(id);
            if (medicine == null)
            {
                return NotFound();
            }

            _context.Medicine.Remove(medicine);
            await _context.SaveChangesAsync();

            return Ok(medicine);
        }

        private bool MedicineExists(int id)
        {
            return _context.Medicine.Any(e => e.Id == id);
        }
    }
}