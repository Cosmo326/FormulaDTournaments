using System;
using FormulaDTournaments.Data.Entity;
using FormulaDTournaments.Data.Entity.Configuration;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace FormulaDTournaments.Data
{
  public class FormulaDContext: DbContext
  { 
    public FormulaDContext(DbContextOptions options): base(options)
    {
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      base.OnModelCreating(modelBuilder);

      modelBuilder.HasDefaultSchema("race");

      modelBuilder.ApplyConfiguration(new TournamentConfiguration());
      modelBuilder.ApplyConfiguration(new RacerConfiguration());
      modelBuilder.ApplyConfiguration(new RaceConfiguration());
      modelBuilder.ApplyConfiguration(new TurnConfiguration());
      modelBuilder.ApplyConfiguration(new TournamentStandingConfiguration());
      modelBuilder.ApplyConfiguration(new RaceStandingConfiguration());

    }
  }
}