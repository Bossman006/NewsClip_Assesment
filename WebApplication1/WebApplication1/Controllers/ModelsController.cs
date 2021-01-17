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
    public class ModelsController : ApiController
    {
        private Volkswagen_NCAEntities db = new Volkswagen_NCAEntities();

        // GET: api/Models
        public IQueryable<Car_Model> GetCar_Model()
        {
            return db.Car_Model;
        }

        // GET: api/Models/5
        [ResponseType(typeof(Car_Model))]
        public IHttpActionResult GetCar_Model(int id)
        {
            Car_Model car_Model = db.Car_Model.Find(id);
            if (car_Model == null)
            {
                return NotFound();
            }

            return Ok(car_Model);
        }

        // PUT: api/Models/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCar_Model(int id, Car_Model car_Model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != car_Model.Model_ID)
            {
                return BadRequest();
            }

            db.Entry(car_Model).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Car_ModelExists(id))
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

        // POST: api/Models
        [ResponseType(typeof(Car_Model))]
        public IHttpActionResult PostCar_Model(Car_Model car_Model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Car_Model.Add(car_Model);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (Car_ModelExists(car_Model.Model_ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = car_Model.Model_ID }, car_Model);
        }

        // DELETE: api/Models/5
        [ResponseType(typeof(Car_Model))]
        public IHttpActionResult DeleteCar_Model(int id)
        {
            Car_Model car_Model = db.Car_Model.Find(id);
            if (car_Model == null)
            {
                return NotFound();
            }

            db.Car_Model.Remove(car_Model);
            db.SaveChanges();

            return Ok(car_Model);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Car_ModelExists(int id)
        {
            return db.Car_Model.Count(e => e.Model_ID == id) > 0;
        }
    }
}