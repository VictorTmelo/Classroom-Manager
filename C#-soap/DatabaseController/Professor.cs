using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseController
{
    public class Professor
    {
        public string id { get; set; }
        public string nome { get; set; }

        public override string ToString()
        {
            return String.Format("id: {0}, nome: {1}", id, nome);
        }
    }
}
