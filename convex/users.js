const { v } = require("convex/values");
const { mutation } = require("./_generated/server");

export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    picture: v.string(),
  },
  handler: async (ctx, args) => {  
    // Check if user already exists
    const userData = await ctx.db.query("users")  
      .filter(q => q.eq(q.field('email'), args.email))
      .collect();

    // If user doesn't exist, insert new user
    if (userData.length === 0)
      {  
        const result = await ctx.db.insert("users",
      {
        name: args.name,
        email: args.email,
        picture: args.picture,
      });
      return result;
    }

    // If user exists, return the existing user
    return userData[0];  
  },
});