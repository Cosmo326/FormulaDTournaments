using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FormulaDTournaments.Data.Entity.Configuration
{
  public class RaceStandingConfiguration: IEntityTypeConfiguration<RaceStanding>
  {
    public void Configure(EntityTypeBuilder<RaceStanding> builder)
    {
      builder.ToTable("RaceStanding");

      builder.HasKey(rs => new {rs.RaceId, rs.RacerId});
      
      
    }
  }
}