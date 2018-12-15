using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FormulaDTournaments.Data.Entity.Configuration
{
  public class RaceConfiguration: IEntityTypeConfiguration<Race>
  {
    public void Configure(EntityTypeBuilder<Race> builder)
    {
      builder.ToTable("Race");
      builder.HasKey(e => e.Id);

      builder.HasOne(r => r.Tournament)
        .WithMany(t => t.Races)
        .HasForeignKey(r => r.TournamentId);

      builder.HasMany(r => r.RaceStandings)
        .WithOne(rs => rs.Race)
        .HasForeignKey(rs => rs.RaceId);
    }
  }
}