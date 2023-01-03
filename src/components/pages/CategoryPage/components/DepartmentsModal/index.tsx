import React, { useEffect, useRef, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { DepartmentsModalProps } from './types';
import styles from './styles.module.scss';
import { getDepartments } from '@/services/api/getDepartments';
import { DepartmentItem } from '@/services/api/getDepartments/types';
import Link from 'next/link';
import DepartmentGroup from './components/DepartmentGroup';
import DepartmentGroupSkeleton from './components/DepartmentGroupSkeleton';

const DepartmentsModal = (props: DepartmentsModalProps) => {
  const { isOpen, setIsOpen } = props;
  const isComponentMounted = useRef(false);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [departmentList, setDepartmentList] = useState<DepartmentItem[]>([]);

  useEffect(() => {
    isComponentMounted.current = true;

    return () => {
      isComponentMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!isComponentMounted.current || !isFirstLoading || !isOpen) {
      return;
    }

    (async () => {
      try {
        const resp = await getDepartments({
          _limit: 8,
        });
        setDepartmentList(resp.data);
      } catch (error) {
        console.log(error);
      }

      setIsFirstLoading(false);
    })();
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className={styles.departmentsModal}
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className={styles.backdrop} aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className={styles.container}>
        {/* Container to center the panel */}
        <div className={styles.containerInner}>
          {/* The actual dialog panel  */}
          <Dialog.Panel className={styles.panel}>
            <div className={styles.panelHead}>
              <Dialog.Title className={styles.panelTitle}>
                Complete your order
              </Dialog.Title>
              <Link className={styles.panelViewMore} href="/">
                See all markets
              </Link>
            </div>

            <div className={styles.panelBody}>
              <div className={styles.departmanentsRows}>
                {isFirstLoading ? (
                  <>
                    {Array.from(new Array(12)).map((_, idx) => {
                      return (
                        <div key={idx} className={styles.departmentCol}>
                          <DepartmentGroupSkeleton />
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {departmentList.map((item) => {
                      return (
                        <div key={item.id} className={styles.departmentCol}>
                          <DepartmentGroup deparment={item} />
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default DepartmentsModal;
