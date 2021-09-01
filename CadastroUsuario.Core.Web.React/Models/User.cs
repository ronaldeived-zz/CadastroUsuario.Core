using System;
using System.Collections.Generic;

#nullable disable

namespace CadastroUsuario.Core.Web.React.Models
{
    public partial class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public DateTime? Birth { get; set; }
        public long? Cpf { get; set; }
        public long? Rg { get; set; }
        public long? PostalCode { get; set; }
        public string Street { get; set; }
        public string District { get; set; }
        public string Complement { get; set; }
        public string HouseNumber { get; set; }
        public long? Phone { get; set; }
        public string SocialMidias { get; set; }
    }
}
