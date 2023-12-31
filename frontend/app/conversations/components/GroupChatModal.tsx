"use client"

import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";
import Input from "@/app/components/inputs/Input";
import Select from "@/app/components/inputs/Select";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface GroupChatModalProps {
  isOpen?: boolean;
  onClose: () => void;
  users: User[]
}

const GroupChatModal: React.FC<GroupChatModalProps> = ({
  isOpen,
  onClose,
  users
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const{
      register,
      handleSubmit,
      setValue,
      watch,
      formState: {
        errors
      }
    } = useForm<FieldValues>({
      defaultValues: {
        name: '',
        members: []
      }
    });


    const members = watch('members');
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true);

      axios.post('/api/conversations', {
        ...data,
        isGroup: true
      })
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch(() => toast.error('Something went wrong'))
      .finally(() => setIsLoading(false))
    }
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-12">
            <div className="border-b border-gray-300 pb-12">
              {/* Group Chat Title and Description */}
              <h2 className="text-lg font-semibold leading-7 text-green-800">
                Create a Group Chat
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Create a chat with more than 2 people.
              </p>
              {/* Form Inputs */}
              <div className="mt-8 flex flex-col gap-y-6">
                {/* Input for Group Name */}
                <Input
                  register={register}
                  label="Group Name"
                  id="name"
                  disabled={isLoading}
                  required
                  errors={errors}
                />
                {/* Select Members */}
                <Select
                  disabled={isLoading}
                  label="Members"
                  options={users.map((user) => ({
                    value: user.id,
                    label: user.name,
                  }))}
                  onChange={(value) => setValue('members', value, { shouldValidate: true })}
                  value={members}
                />
              </div>
            </div>
          </div>
          {/* Modal Footer with Buttons */}
          <div className="mt-8 flex items-center justify-end gap-x-6">
            {/* Cancel Button */}
            <Button disabled={isLoading} onClick={onClose} type="button" secondary>
              Cancel
            </Button>
            {/* Create Button */}
            <Button disabled={isLoading} type="submit">
              Create
            </Button>
          </div>
        </form>
      </Modal>
    );
  };
  
  export default GroupChatModal;