using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseController
{
    public class Aluno
    {
        public string nome { get; set; }
        public string matricula { get; set; }

        public string idade { get; set; }

        public string email { get; set; }

        public string telefone { get; set; }

        public override string ToString()
        {
            return String.Format("nome: {0}, matricula: {1}, idade: {2}, email: {3}, telefone: {4}", nome, matricula, idade, email, telefone);
        }
    }
}
