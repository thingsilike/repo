using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AB.ThingsILike.BO
{
    public interface IRepository <TItem, TFilter>
    {
        List<TItem> GetAll(TFilter filter);
    }
}
