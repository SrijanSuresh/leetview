import { PrismaClient } from '../app/generated/prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { username: 'srijan' },
    update: {},
    create: {
      username: 'srijan',
      problems: {
        create: [
          {
            title: 'Two Sum',
            difficulty: 'Easy',
            topicTags: ['Array', 'HashMap'],
            dateSolved: new Date('2024-12-01'),
          },
          {
            title: 'Longest Palindromic Substring',
            difficulty: 'Medium',
            topicTags: ['DP', 'String'],
            dateSolved: new Date('2024-12-03'),
          },
        ],
      },
    },
  })
  console.log({ user })
}
main()
