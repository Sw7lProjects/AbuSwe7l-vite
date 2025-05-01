import React from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "flowbite-react"; // مكتبة البادج مع أيقونة
import { Star } from "lucide-react"; // أيقونة lucide
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"; // أيقونات تويتر وجيتهاب

interface AdminCardProps {
  name: string;
}

const adminsData = {
  Saad: {
    image:
      "https://cdn.discordapp.com/avatars/1107071123738333224/c3cf04eac51014a32a55596138b38567.png?size=1024&format=webp&width=768&height=768",
    socialLinks: {
      twitter: "https://twitter.com/Saad",
      linkedin: "https://linkedin.com",
    },
  },
  "SA7 | MoaTaz": {
    image:
      "https://cdn.discordapp.com/avatars/700903797228175391/857f8522e4ef5ac64465b9d48c4f9c63.png?size=1024&format=webp&width=768&height=768",
    socialLinks: {
      twitter: "https://twitter.com/MoaTaz",
      linkedin: "https://linkedin.com",
    },
  },
  "!? 0xReLaX": {
    image:
      "https://cdn.discordapp.com/avatars/1105670596525834250/1630f31bd65afe567a2057644cc24ad2.png?size=1024&format=webp&width=768&height=768",
    socialLinks: {
      github: "hhttps://github.com/RlxChap2",
    },
  },
  iQMusa: {
    image:
      "https://cdn.discordapp.com/avatars/778681849836208148/fad0446c67f9a0a2400737b4d09f0af5.png?size=1024&format=webp&width=768&height=768",
    socialLinks: {
      twitter: "https://twitter.com/iQMusa",
      github: "https://github.com/iQMusa",
    },
  },
  "1hzg": {
    image:
      "https://cdn.discordapp.com/avatars/920681692480548865/0a21b159e1c25a4981054224ed92cb60.png?size=1024&format=webp&width=768&height=768",
    socialLinks: {
    },
  },
  Nelly: {
    image:
      "https://cdn.discordapp.com/avatars/1253080384879595663/44ba898678fcf4f45a710ae42a3f226f.png?size=1024&format=webp&width=768&height=768",
    socialLinks: {
      twitter: "https://twitter.com/Nelly",
    },
  },
};

const SingleAdminCard: React.FC<AdminCardProps> = ({ name }) => {
  const { t } = useTranslation();

  // سحب البيانات من ملفات الترجمة بناءً على اللغة
  const roleKey = `admins.${name}.role`;
  const descriptionKey = `admins.${name}.description`;

  const role = t(roleKey);
  const description = t(descriptionKey);
  const image = adminsData[name].image;
  const socialLinks = adminsData[name].socialLinks;

  return (
    <div
      dir="rtl"
      className="bg-[#0e0c1b] p-5 rounded-xl border border-purple-500
                 shadow-[0_0_15px_rgba(155,89,182,0.2)]
                 hover:shadow-[0_0_25px_rgba(155,89,182,0.4)]
                 transition-all text-white"
    >
      <div className="flex items-center gap-3 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border border-purple-400 shadow"
        />
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold">{name}</h3>
          <Badge
            icon={Star} // يمكنك تخصيص الأيقونة حسب الحاجة
            className="flex items-center gap-1 px-2 py-0.5 text-sm rounded bg-purple-600 text-white"
          >
            {role}
          </Badge>
        </div>
      </div>
      <p className="text-sm text-gray-300 leading-relaxed">{description}</p>

      {/* عرض روابط مواقع التواصل الاجتماعي */}
      <div className="flex gap-3 mt-3">
        {socialLinks.twitter && (
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-blue-500 hover:text-blue-600" />
          </a>
        )}
        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-700 hover:text-gray-800" />
          </a>
        )}
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            className="text-gray-500 hover:text-white transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={18} />
          </a>
        )}
      </div>
    </div>
  );
};

const AdminCard: React.FC = () => {
  const admins = Object.keys(adminsData);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {admins.map((name) => (
        <SingleAdminCard key={name} name={name} />
      ))}
    </section>
  );
};

export default AdminCard;
