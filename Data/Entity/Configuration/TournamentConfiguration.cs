using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FormulaDTournaments.Data.Entity.Configuration
{
  public class TournamentConfiguration: IEntityTypeConfiguration<Tournament>
  {
    public void Configure(EntityTypeBuilder<Tournament> builder)
    {
      builder.ToTable("Tournament");
      
      builder.HasKey(e => e.Id);

      builder.HasMany(t => t.TournamentStandings)
        .WithOne(ts => ts.Tournament)
        .HasForeignKey(ts => ts.TournamentId);
    }
  }
}