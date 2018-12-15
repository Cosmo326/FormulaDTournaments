using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FormulaDTournaments.Data.Entity.Configuration
{
  public class TurnConfiguration: IEntityTypeConfiguration<Turn>
  {
    public void Configure(EntityTypeBuilder<Turn> builder)
    {
      builder.ToTable("Turn");
      
      builder.HasKey(t => t.Id);
      
      builder.HasOne(t => t.Racer)
        .WithMany(r => r.Turns)
        .HasForeignKey(t => t.RacerId);

      builder.HasOne(t => t.Race)
        .WithMany(r => r.Turns)
        .HasForeignKey(t => t.RaceId);
    }
  }
}