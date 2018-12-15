using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FormulaDTournaments.Data.Entity.Configuration
{
  public class RacerConfiguration: IEntityTypeConfiguration<Racer>
  {
    public void Configure(EntityTypeBuilder<Racer> builder)
    {
      builder.ToTable("Racer");
      
      builder.HasKey(e => e.Id);

//      builder.HasMany(r => r.Turns)
//        .WithOne(t => t.Racer)
//        .HasForeignKey(t => t.RacerId);
//
//      builder.HasMany(r => r.RaceStandings)
//        .WithOne(rs => rs.Racer)
//        .HasForeignKey(rs => rs.RacerId);
//
//      builder.HasMany(r => r.TournamentStandings)
//        .WithOne(ts => ts.Racer)
//        .HasForeignKey(ts => ts.Racer);
    }
  }
}