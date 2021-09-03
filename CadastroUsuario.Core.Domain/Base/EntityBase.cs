using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CadastroUsuario.Core.Domain.Cadastro
{
    public abstract class EntityBase
    {
        protected EntityBase()
        {
            DateInserted = DateTime.Now;
        }

        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public DateTime DateInserted { get; set; }
    }
}
