import { MenuMap } from "./types";

export const selectMenuMap: MenuMap[] = [
    {
        label: "Usage",
        href: "#usage",
    },
    {
        label: "Label",
        href: "#label",
    },
    {
        label: "Searchable",
        href: "#searchable",
    },
    {
        label: "Disabled",
        href: "#disabled",
    },
];

export const selectCode = {
    usage: `import { Select, SelectItem } from "@/components/ui/Select/Select";

const [selectedFruit, setSelectedFruit] = useState<string>("");

<Select
    value={selectedFruit}
    setValue={setSelectedFruit}
    placeholder="Fruits"
>
    <SelectItem value="Apple">Apple</SelectItem>
    <SelectItem value="Banana">Banana</SelectItem>
    <SelectItem value="Orange">Orange</SelectItem>
    <SelectItem value="Pear">Pear</SelectItem>
    <SelectItem value="Strawberry">Strawberry</SelectItem>
</Select>`,

    label: `import { Select, SelectItem } from "@/components/ui/Select/Select";

const [yesNo, setYesNo] = useState<string>("");

<Select
    label="Label for select"
    value={yesNo}
    setValue={setYesNo}
    placeholder="Agree"
>
    <SelectItem value="Yes">Yes</SelectItem>
    <SelectItem value="No">No</SelectItem>
</Select>`,

    searchable: `import { Select, SelectItem } from "@/components/ui/Select/Select";

const [selectedFruit, setSelectedFruit] = useState<string>("");

<Select
    searchable
    value={selectedFruit}
    setValue={setSelectedFruit}
    placeholder="Fruits"
>
    <SelectItem value="Apple">Apple</SelectItem>
    <SelectItem value="Banana">Banana</SelectItem>
    <SelectItem value="Orange">Orange</SelectItem>
    <SelectItem value="Pear">Pear</SelectItem>
    <SelectItem value="Strawberry">Strawberry</SelectItem>
</Select>`,

    disabled: `import { Select, SelectItem } from "@/components/ui/Select/Select";

const [selectedFruit, setSelectedFruit] = useState<string>("");

<Select
    disabled
    value={selectedFruit}
    setValue={setSelectedFruit}
    placeholder="Fruits"
>
    <SelectItem value="Apple">Apple</SelectItem>
    <SelectItem value="Banana">Banana</SelectItem>
    <SelectItem value="Orange">Orange</SelectItem>
    <SelectItem value="Pear">Pear</SelectItem>
    <SelectItem value="Strawberry">Strawberry</SelectItem>
</Select>`,
};
