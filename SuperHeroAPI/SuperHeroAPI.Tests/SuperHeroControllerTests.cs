using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using NUnit.Framework.Internal;
using SuperHeroAPI.Controllers;
using SuperHeroAPI.Data;
using SuperHeroAPI.Services;
using Xunit.Abstractions;

namespace SuperHeroAPI.Tests
{
    public class SuperHeroControllerTests
    {
        public static SuperHero superHero1 = new SuperHero
        {
            Name = "Superman",
            FirstName = "Clark",
            LastName = "Kent",
            Place = "New York City"
        };

        public static SuperHero superHero2 = new SuperHero
        {
            Name = "Batman",
            FirstName = "Bruce",
            LastName = "Wayne",
            Place = "Gotham City"
        };

        public readonly List<SuperHero> list = new List<SuperHero> { superHero1, superHero2 };
        public readonly AlphabetOrderService test = new();

        private readonly ITestOutputHelper output;

        public SqlConnection Dd { get; private set; }

        public SuperHeroControllerTests(ITestOutputHelper output)
        {
            this.output = output;
            /* Dd = new SqlConnection("server=localhost\\sqlexpress;database=superherodb;trusted_connection=true;TrustServerCertificate=True;Encrypt=False");
            Dd.Open();
            SqlDataReader? data = null;
            SqlCommand command = new("SELECT * FROM superherodb");
            data = command.ExecuteReader();
            output.WriteLine(data.ToString());*/
        }





        [Fact]
        public List<SuperHero> TestSortByName()
        {
            List<SuperHero> sortedName = test.SortbyName(list);
            foreach (SuperHero item in sortedName)
            { output.WriteLine(item.Name); }
            return sortedName;
        }
        [Fact]
        public List<SuperHero> TestSortByFirstName()
        {
            List<SuperHero> sortedFirstName = test.SortbyFirstName(list);
            foreach (SuperHero item in sortedFirstName)
            { output.WriteLine(item.FirstName); }
            return sortedFirstName;
        }

        [Fact]
        public List<SuperHero> TestSortByLastName()
        {
            List<SuperHero> sortedLastName = test.SortbyLastName(list);
            foreach (SuperHero item in sortedLastName)
            { output.WriteLine(item.LastName); }

            return sortedLastName;
        }

        [Fact]
        public List<SuperHero> TestSortPlace()
        {
            List<SuperHero> sortedPlace = test.SortbyPlace(list);
            foreach (SuperHero item in sortedPlace)
            { output.WriteLine(item.Place); }
            return sortedPlace;
        }

    }


}