using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileSystemGlobbing.Internal.PathSegments;
using Microsoft.IdentityModel.Tokens;
using SuperHeroAPI.Controllers;
using SuperHeroAPI.Data;
using System.Collections.Generic;

namespace SuperHeroAPI.Services
{
    public class AlphabetOrderService
    {
        public AlphabetOrderService()
        {
        }

        public List<SuperHero> SortbyName(List<SuperHero> list)
        {
            return list.OrderBy(hero => hero.Name).ToList();
        }
        public List<SuperHero> SortbyFirstName(List<SuperHero> list)
        {
            return list.OrderBy(hero => hero.FirstName).ToList();
        }
        public List<SuperHero> SortbyLastName(List<SuperHero> list)
        {
            return list.OrderBy(hero => hero.LastName).ToList();
        }
        public List<SuperHero> SortbyPlace(List<SuperHero> list)
        {
            return list.OrderBy(hero => hero.Place).ToList();
        }
    }
}
