using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FormulaDTournaments.Data.Entity.Configuration
{
  public class TournamentStandingConfiguration: IEntityTypeConfiguration<TournamentStanding>
  {
    public void Configure(EntityTypeBuilder<TournamentStanding> builder)
    {
      builder.ToTable("TournamentStanding");

      builder.HasKey(ts => new {ts.TournamentId, ts.RacerId});
    }
  }
}