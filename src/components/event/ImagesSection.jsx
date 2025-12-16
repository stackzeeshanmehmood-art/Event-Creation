import { Section } from "../ui/Section";
import { ImageUpload } from "../ui/ImageUpload";


export function ImagesSection() {
  return (
    <Section title="Event Images">
      <ImageUpload label="Flyer Image" fileKey="flyerImage" previewKey="flyerPreview" />
      <ImageUpload label="Background Image" fileKey="backgroundImage" previewKey="backgroundPreview" />
    </Section>
  );
}