import { createUploadthing, type FileRouter } from "uploadthing/next";
import { z } from "zod";
import sharp from "sharp";
import { db } from "@/db";

// Create an instance of Uploadthing for file handling
const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .input(
      z.object({
        configId: z.string().optional(),
      })
    )
    // Middleware to process the input before the file upload
    .middleware(async ({ input }) => {
      // Pass the input to the next step
      return { input };
    })
    // Handle actions after the file upload is complete
    .onUploadComplete(async ({ metadata, file }) => {
      const { configId } = metadata.input; // Extract 'configId' from metadata

      // Fetch the uploaded file's URL
      const res = await fetch(file.url);
      const buffer = await res.arrayBuffer();
      const imgMetadata = await sharp(buffer).metadata();
      const { width, height } = imgMetadata;

      if (!configId) {
        const configuration = await db.configuration.create({
          data: {
            height: height || 500,
            width: width || 500,
            imageUrl: file.url,
          },
        });

        return { configId: configuration.id };
      } else {
        const updatedConfiguration = await db.configuration.update({
          where: {
            id: configId,
          },
          data: {
            croppedImageUrl: file.url,
          },
        });

        return { configId: updatedConfiguration.id };
      }
    }),
} satisfies FileRouter; // Ensure ourFileRouter conforms to the FileRouter type

// Export the type of ourFileRouter for use elsewhere in the application
export type OurFileRouter = typeof ourFileRouter;
