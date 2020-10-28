import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "titlecase"
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    if (!value) return "";
    let lowercaseArr = value.toLowerCase().trim().split(" ");

    let resultArr = lowercaseArr.map(
      (item) => this.isPreposition(item) ? item : this.toTitleCase(item)
    )
    return resultArr.join("");
  }

  private toTitleCase(word): string {
    if (!word) return "";
    return word[0].toUpperCase() + word.slice(1);
  }

  private isPreposition(word): boolean {
    let prepositions = ["the", "of"];
    return prepositions.includes(word);
  }

}
