using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class MakesController : ApiController
    {
        private Volkswagen_NCAEntities db = new Volkswagen_NCAEntities();

        // GET: api/Makes
        public IQueryable<Car_Make> GetCar_Make()
        {
            return db.Car_Make;
        }

        // GET: api/Makes/5
        [ResponseType(typeof(Car_Make))]
        public IHttpActionResult GetCar_Make(int id)
        {
            Car_Make car_Make = db.Car_Make.Find(id);
            if (car_Make == null)
            {
                return NotFound();
            }

            return Ok(car_Make);
        }

        // PUT: api/Makes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCar_Make(int id, Car_Make car_Make)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != car_Make.Make_ID)
            {
                return BadRequest();
            }

            db.Entry(car_Make).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Car_MakeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Makes
        [ResponseType(typeof(Car_Make))]
        public IHttpActionResult PostCar_Make(Car_Make car_Make)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Car_Make.Add(car_Make);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (Car_MakeExists(car_Make.Make_ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = car_Make.Make_ID }, car_Make);
        }

        // DELETE: api/Makes/5
        [ResponseType(typeof(Car_Make))]
        public IHttpActionResult DeleteCar_Make(int id)
        {
            Car_Make car_Make = db.Car_Make.Find(id);
            if (car_Make == null)
            {
                return NotFound();
            }

            db.Car_Make.Remove(car_Make);
            db.SaveChanges();

            return Ok(car_Make);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Car_MakeExists(int id)
        {
            return db.Car_Make.Count(e => e.Make_ID == id) > 0;
        }
    }
}