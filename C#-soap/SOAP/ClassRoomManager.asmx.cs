using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Services;
using DatabaseController;

namespace SOAP
{
    /// <summary>
    /// Descrição resumida de ClassRoomManager
    /// </summary>
    [WebService(Namespace = "http://classroom_manager.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [ScriptService]
    // Para permitir que esse serviço da web seja chamado a partir do script, usando ASP.NET AJAX, remova os comentários da linha a seguir. 
    // [System.Web.Script.Services.ScriptService]
    public class ClassRoomManager : System.Web.Services.WebService
    {

        [WebMethod]
        public List<DatabaseController.Professor> GetProfessors()
        {
            
            return DatabaseController.Controller.get_professors();
        }

        [WebMethod]
        public DatabaseController.Professor GetProfessor(string name)
        {
            return DatabaseController.Controller.get_professor(name);
        }
    }
}
