function isImageUrl(url: string): boolean {
  return /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(url);
}

export const Image = ({ imageUrl }: { imageUrl: string }) => {
  const isValidImage = isImageUrl(imageUrl);
  return (
    isValidImage && (
      <img src={imageUrl} width={25} height="auto" alt="employer" />
    )
  );
};
