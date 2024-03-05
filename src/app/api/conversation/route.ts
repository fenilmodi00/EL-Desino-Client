// import { NextResponse } from 'next/server'
// import { auth } from '@clerk/nextjs'
// import { StatusCodes } from 'http-status-codes'
// //import { ChatCompletionRequestMessage, GenerationConfig, OpenAIApi } from 'openai'
// import { GenerationConfig, apiKey } from '@google/generative-ai';
// import { checkApiLimit, increaseApiLimit } from '@/lib/api-limit'
// import { checkSubscription } from '@/lib/subscription'

// // const GenerationConfig = new GenerationConfig({
// //   apiKey: process.env.OPENAI_API_KEY
// // })

// // const openai = new OpenAIApi(GenerationConfig)

// const GenerationConfig: GenerationConfig = new GenerationConfig({
//   apiKey: process.env.GEMINI_API_KEY
// });

// const gemini = new apiKey(GenerationConfig);


// export async function POST(req: Request) {
//   try {
//     const { userId } = auth()

//     if (!userId) {
//       return new NextResponse('Unauthorized', {
//         status: StatusCodes.UNAUTHORIZED
//       })
//     }

//     if (!GenerationConfig.apiKey) {
//       return new NextResponse('OpenAI API Key not configured', {
//         status: StatusCodes.INTERNAL_SERVER_ERROR
//       })
//     }

//     const body = await req.json()
//     const messages = body.messages as ChatCompletionRequestMessage[]

//     if (!messages) {
//       return new NextResponse('Messages are required', {
//         status: StatusCodes.BAD_REQUEST
//       })
//     }

//     const freeTrial = await checkApiLimit()
//     const isPro = await checkSubscription()

//     if (!freeTrial && !isPro) {
//       return new NextResponse('Free trial has expired.', {
//         status: StatusCodes.PAYMENT_REQUIRED
//       })
//     }

//     // const { data } = await openai.createChatCompletion({
//     //   model: 'gpt-3.5-turbo',
//     //   messages
//     // })

//     const { data } = await gemini.generateText({
//       model: '1.0-turbo',  // Or another suitable Gemini model
//       prompt: messages
//   });

//     if (!isPro) await increaseApiLimit()

//     return NextResponse.json(data.choices[0].message, {
//       status: StatusCodes.CREATED
//     })
//   } catch (error) {
//     console.log('[CONVERSATION_ERROR]', error)
//     return new NextResponse('Internal error', {
//       status: StatusCodes.INTERNAL_SERVER_ERROR
//     })
//   }
// }
