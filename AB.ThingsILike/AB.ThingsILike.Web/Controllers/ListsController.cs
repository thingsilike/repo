using AB.ThingsILike.BO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AB.ThingsILike.Web.Controllers
{
    public class ListsController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<ListDTO> Get()
        {
            var listRepo = new ListRepository();
            var listService = new ListService(listRepo);
            var filter = new BaseFilter();
            return listService.GetAll(filter).Select(l => new ListDTO() 
            {
                Id = l.l_id,
                Name = l.l_name
            });
        }
    }

    public class ListDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }
}