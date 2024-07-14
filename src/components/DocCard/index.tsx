/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  findFirstSidebarItemLink,
  useDocById,
} from '@docusaurus/theme-common/internal';
import {usePluralForm} from '@docusaurus/theme-common';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {translate} from '@docusaurus/Translate';

import type {Props} from '@theme/DocCard';
import Heading from '@theme/Heading';
import type {
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';

import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';

import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export interface PropSidebarItemWithImgCategory extends PropSidebarItemCategory {
  img: string;
}

export interface PropsWithImg extends Props {
  img: string;
}

function useCategoryItemsPlural() {
  const {selectMessage} = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          message: '1 item|{count} items',
          id: 'theme.docs.DocCard.categoryDescription.plurals',
          description:
            'The default description for a category card in the generated index about how many items this category includes',
        },
        {count},
      ),
    );
}

function CardContainer({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <Link
      href={href}
      className={clsx('card padding--lg', styles.cardContainer)}>
      {children}
    </Link>
  );
}

function CardLayout({
  href,
  icon,
  title,
  img,
  description,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  img?: string;
  description?: string;
}): JSX.Element {
  return (
    <CardContainer href={href}>
      <Heading
        as="h2"
        className={clsx('text--truncate', styles.cardTitle)}
        title={title}>
        {icon} {title}
      </Heading>
      {img && (
        <img
          src={img}
          alt={description}
        />
      )}
      {description && (
        <p
          className={clsx('text--truncate', styles.cardDescription)}
          title={description}>
          {description}
        </p>
      )}
    </CardContainer>
  );
}

function CardCategory({
  item,
}: {
  item: PropSidebarItemWithImgCategory;
}): JSX.Element | null {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useCategoryItemsPlural();

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }

  return (
    <CardLayout
      href={href}
      icon="🗃️"
      img={item.img}
      title={item.label}
      description={item.description ?? categoryItemsPlural(item.items.length)}
    />
  );
}

function CardLink({item, img}: {item: PropSidebarItemLink, img?: string}): JSX.Element {
  const icon = isInternalUrl(item.href) ? '📄️' : '🔗';
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={item.description ?? doc?.description}
      img={img}
    />
  );
}

export default function DocCard({item, img}: PropsWithImg): JSX.Element {
  
  const { activeVersion } = useActiveDocContext('docs');

  
  if (item.type === 'link') {
    const referencedDoc = activeVersion.docs.find(doc => doc.id === item.docId);
    if (referencedDoc) {
      debugger;
      require(`raw-loader!${referencedDoc.path}.mdx`).then((module) => {
        debugger;
      });
    }
  }

  switch (item.type) {
    case 'link':
      return <CardLink item={item} img={img} />;
    case 'category':
      return <CardCategory item={{
        ...item,
        img,
      }} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
