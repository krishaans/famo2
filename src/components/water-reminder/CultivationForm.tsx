import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import { X } from 'lucide-react';
import { format } from 'date-fns';

interface CultivationFormProps {
  onSubmit: (cultivation: any) => void;
  onClose: () => void;
}

const vegetables = ['Pumpkin', 'Tomato', 'Carrot', 'Beans'];
const genres = ['Organic', 'Traditional', 'Hybrid'];

const CultivationForm: React.FC<CultivationFormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    vegetableType: '',
    genre: '',
    startDate: format(new Date(), 'yyyy-MM-dd'),
    lastWateredDate: format(new Date(), 'yyyy-MM-dd'),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      id: crypto.randomUUID(),
      wateringInterval: 3, // Every 3 days
      fertilizerInterval: 21, // Every 3 weeks
      medicineInterval: 14, // Every 2 weeks
      events: [],
    });
    onClose();
  };

  return (
    <Dialog.Content className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">Add New Cultivation</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vegetable Type
            </label>
            <Select.Root
              onValueChange={(value) => setFormData({ ...formData, vegetableType: value })}
            >
              <Select.Trigger className="w-full p-2 border rounded-md">
                {formData.vegetableType || 'Select vegetable...'}
              </Select.Trigger>
              <Select.Content className="bg-white p-2 rounded-md shadow-lg">
                {vegetables.map((veg) => (
                  <Select.Item
                    key={veg}
                    value={veg}
                    className="p-2 cursor-pointer hover:bg-gray-100 rounded"
                  >
                    {veg}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Genre
            </label>
            <Select.Root
              onValueChange={(value) => setFormData({ ...formData, genre: value })}
            >
              <Select.Trigger className="w-full p-2 border rounded-md">
                {formData.genre || 'Select genre...'}
              </Select.Trigger>
              <Select.Content className="bg-white p-2 rounded-md shadow-lg">
                {genres.map((genre) => (
                  <Select.Item
                    key={genre}
                    value={genre}
                    className="p-2 cursor-pointer hover:bg-gray-100 rounded"
                  >
                    {genre}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Watered Date
            </label>
            <input
              type="date"
              value={formData.lastWateredDate}
              onChange={(e) => setFormData({ ...formData, lastWateredDate: e.target.value })}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary transition-colors"
          >
            Add Cultivation
          </button>
        </form>
      </div>
    </Dialog.Content>
  );
};

export default CultivationForm;