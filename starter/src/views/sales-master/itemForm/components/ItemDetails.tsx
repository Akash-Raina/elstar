export const ItemDetails = () => {
    const itemData = [
      {
        productType: "1234",
        code: "Abc123",
        description: "2546",
        storingUnit: "Godown1",
        orderingUnit: "1234",
        conversingFactor: "Abc123",
        storingLocation: "2546",
        weight: "2546",
        unit: "1234",
        hsnCode: "Abc123",
        godown: "2546",
        openingBalance: "2546",
      },
      {
        productType: "1234",
        code: "Abc123",
        description: "2546",
        storingUnit: "Godown2",
        orderingUnit: "1234",
        conversingFactor: "Abc123",
        storingLocation: "2546",
        weight: "2546",
        unit: "1234",
        hsnCode: "Abc123",
        godown: "2546",
        openingBalance: "2546",
      },
      {
        productType: "1234",
        code: "Abc123",
        description: "2546",
        storingUnit: "Godown3",
        orderingUnit: "1234",
        conversingFactor: "Abc123",
        storingLocation: "2546",
        weight: "2546",
        unit: "1234",
        hsnCode: "Abc123",
        godown: "2546",
        openingBalance: "2546",
      },
    ];
  
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Item Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left border-b">Product Type</th>
                <th className="py-2 px-4 text-left border-b">Code</th>
                <th className="py-2 px-4 text-left border-b">Description</th>
                <th className="py-2 px-4 text-left border-b">Storing Unit</th>
                <th className="py-2 px-4 text-left border-b">Ordering Unit</th>
                <th className="py-2 px-4 text-left border-b">Conversing Factor</th>
                <th className="py-2 px-4 text-left border-b">Storing Location</th>
                <th className="py-2 px-4 text-left border-b">Weight</th>
                <th className="py-2 px-4 text-left border-b">Unit</th>
                <th className="py-2 px-4 text-left border-b">HSN Code</th>
                <th className="py-2 px-4 text-left border-b">Godown</th>
                <th className="py-2 px-4 text-left border-b">Opening Balance</th>
              </tr>
            </thead>
            <tbody>
              {itemData.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="py-2 px-4 border-b">{item.productType}</td>
                  <td className="py-2 px-4 border-b">{item.code}</td>
                  <td className="py-2 px-4 border-b">{item.description}</td>
                  <td className="py-2 px-4 border-b">{item.storingUnit}</td>
                  <td className="py-2 px-4 border-b">{item.orderingUnit}</td>
                  <td className="py-2 px-4 border-b">{item.conversingFactor}</td>
                  <td className="py-2 px-4 border-b">{item.storingLocation}</td>
                  <td className="py-2 px-4 border-b">{item.weight}</td>
                  <td className="py-2 px-4 border-b">{item.unit}</td>
                  <td className="py-2 px-4 border-b">{item.hsnCode}</td>
                  <td className="py-2 px-4 border-b">{item.godown}</td>
                  <td className="py-2 px-4 border-b">{item.openingBalance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  