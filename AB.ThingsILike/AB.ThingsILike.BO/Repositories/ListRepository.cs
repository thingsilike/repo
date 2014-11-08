using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AB.ThingsILike.BO
{
    public interface IListRepository : IRepository<List, BaseFilter>
    {
    }

    public class ListRepository : IListRepository
    {
        public List<List> GetAll(BaseFilter filter)
        {
            using (var ctx = new ThingsILikeDevEntities())
            {
                return ctx.Lists.ToList();
            }
        }
    }
}
