import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;

/** "fr/feedwise" -> "feedwise" */
export const projectSlug = (project: Project) => project.id.split('/').slice(1).join('/');

export async function getProjects(lang: Lang): Promise<Project[]> {
  const projects = await getCollection(
    'projects',
    ({ id, data }) => id.startsWith(`${lang}/`) && !data.draft,
  );
  return projects.sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      b.data.year - a.data.year ||
      a.data.title.localeCompare(b.data.title),
  );
}
