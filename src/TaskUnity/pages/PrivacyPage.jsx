export const PrivacyPage = () => {
  return (
    <main className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mx-4 md:mx-8 lg:mx-0 text-lg space-y-8">
          <h1 className="text-5xl font-bold">Privacy Notice</h1>
          <p>At TaskUnity, we value and respect the privacy of our users. This Privacy Notice aims to inform you about how we manage and protect the information we collect through our website.</p>

          <h2 className="text-3xl font-bold">Information Collected</h2>
          <p>When using TaskUnity, we collect limited information necessary to manage user authentication. The information collected includes:</p>
          <ul>
            <li className="flex">
              <span className="bg-taskunity-800 mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
              <p>Email address.</p>
            </li>
          </ul>

          <h2 className="text-3xl font-bold">Use of Information</h2>
          <p>The information collected will be used exclusively for the following purposes:</p>
          <ul>
            <li className="flex">
              <span className="bg-taskunity-800 mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"></span>
              <p><span className="font-bold">User Authentication:</span> The email address will be used to manage the authentication process and provide secure access to the TaskUnity platform.</p>
            </li>
          </ul>

          <h2 className="text-3xl font-bold">Information Protection</h2>
          <p>At TaskUnity, we are committed to protecting our users' information. We implement physical, electronic, and administrative security measures to prevent unauthorized access, disclosure, alteration, or destruction of the collected information.</p>

          <h2 className="text-3xl font-bold">Information Sharing</h2>
          <p>We do not share, sell, or rent our users' personal information to third parties, except when necessary to comply with legal obligations or to improve our services.</p>

          <h2 className="text-3xl font-bold">Access and Control</h2>
          <p>Users have the right to access their personal information, correct it, or request its deletion. To make changes to your information, please contact us at contacto@taskunity.com.</p>

          <h2 className="text-3xl font-bold">Changes to the Privacy Policy</h2>
          <p>TaskUnity reserves the right to update or modify this Privacy Notice at any time. Changes will be notified through the platform or via email.</p>

          <h2 className="text-3xl font-bold">Contact</h2>
          <p>If you have questions or concerns about our Privacy Notice, please contact us at contacto@taskunity.com.</p>
          <p>By using TaskUnity, you accept the terms of this Privacy Notice.</p>
        </div>
      </div>
    </main>
  )
}
