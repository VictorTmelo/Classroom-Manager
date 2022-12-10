using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseController
{
    public class Disciplinas
    {
        public string id { get; set; }
        public string nome { get; set; }

        public string horario { get; set; }

        public override string ToString()
        {
            return String.Format("id: % s, nome: % s, horario: %s", id, nome, horario);
        }
    }
}
