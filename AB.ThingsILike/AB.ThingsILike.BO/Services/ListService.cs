using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AB.ThingsILike.BO
{
    public class ListService
    {
        private IListRepository Repo { get; set; }

        public ListService(IListRepository repo)
        {
            Repo = repo;
        }

        public List<List> GetAll(BaseFilter filter)
        {
            return Repo.GetAll(filter);
        }
    }
}
