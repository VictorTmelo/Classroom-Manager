using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseController
{
    public class Alunos
    {
        public string nome { get; set; }
        public string matricula { get; set; }

        public override string ToString()
        {
            return String.Format("matricula: % s, nome: % s", matricula, nome);
        }
    }
}
