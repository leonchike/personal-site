"use client";

export default function ObfuscatedEmail({ email }: { email: string }) {
  // Split the email into parts
  const emailParts = email.split("@");
  const user = emailParts[0];
  const domainParts = emailParts[1].split(".");
  const domain = domainParts[0];
  const topLevelDomain = domainParts[1];

  // Function to reassemble the email address
  const getEmail = () => {
    return `${user}@${domain}.${topLevelDomain}`;
  };

  return (
    <a href={`mailto:${getEmail()}`} onClick={(e) => e.preventDefault()}>
      <span>{user}</span>
      <span>&#64;</span>
      <span>{domain}</span>
      <span>&#46;</span>
      <span>{topLevelDomain}</span>
    </a>
  );
}
